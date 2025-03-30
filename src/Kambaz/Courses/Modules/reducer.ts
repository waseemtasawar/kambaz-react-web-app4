import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Module {
  _id: string;
  name: string;
  description?: string;
  lessons?: Lesson[];
  editing?: boolean;
  // Add other module properties as needed
}

interface Lesson {
  _id: string;
  name: string;
  // Add other lesson properties as needed
}

interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (
      state,
      action: PayloadAction<Omit<Module, "_id" | "lessons">>
    ) => {
      state.modules.push({
        ...action.payload,
        _id: uuidv4(),
        lessons: [],
      });
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter((m) => m._id !== action.payload);
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      const index = state.modules.findIndex(
        (m) => m._id === action.payload._id
      );
      if (index !== -1) {
        state.modules[index] = action.payload;
      }
    },
    editModule: (state, action: PayloadAction<string>) => {
      const module = state.modules.find((m) => m._id === action.payload);
      if (module) {
        module.editing = true;
      }
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
