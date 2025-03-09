import { Link } from "react-router-dom";
export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <p>Your full name: Ann Thomas </p>
            <p>Section:37031 </p>
            <p>Email: thomas.ann@northeastern.edu</p>
            <p>GitHub URL:https://github.com/annsthomas/kambaz-react-web-app3 </p>
            <h2>Lab Assignments</h2>
            <ul>
                <li><Link to="/Labs/Lab1">Lab 1</Link></li>
                <li><Link to="/Labs/Lab2">Lab 2</Link></li>
                <li><Link to="/Labs/Lab3">Lab 3</Link></li>
            </ul>
            <h2>Links</h2>
            <ul>
                 <Link to="/Kambaz/">Back to Kambaz Application</Link>
                <li><a href="https://github.com/annsthomas/kambaz-react-web-app/tree/main/src/Labs/Lab1" target="_blank" rel="noopener noreferrer">Source Code Repository 1</a></li>
                <li><a href="https://github.com/annsthomas/kambaz-react-web-app/tree/main/src/Labs/Lab2" target="_blank" rel="noopener noreferrer">Source Code Repository 2</a></li>
            </ul>
            <h3 id="wd-h3">HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                <p>
                    Text documents are often broken up into several sections and subsections. Each section is
                    usually prefaced with a short title or heading that attempts to summarize the topic of the
                    section it precedes. For instance, this paragraph is preceded by the heading <strong>Heading Tags</strong>. 
                    The font of the section headings are usually larger and bolder than the plain text and their 
                    subsection headings. This document uses headings to introduce topics such as HTML Documents, 
                    HTML Tags, Heading Tags, etc.
                </p>
                <p>
                    HTML heading tags can be used to format plain text so that it renders in a browser as large headings.
                    There are 6 heading tags for different sizes: h1, h2, h3, 
                    h4, h5, and h6. Tag h1 is the largest heading 
                    and h6 is the smallest heading.
                </p>
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.</p>
                <p id="wd-p-2">This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.</p>
                <p id="wd-p-3">This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.</p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                <p>How to make pancakes:</p>
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                <p>My favorite recipe:</p>
                <ol id="wd-your-favorite-recipe">
                    <li>Choose your favorite ingredients.</li>
                    <li>Prepare and mix the ingredients.</li>
                    <li>Cook and enjoy your meal!</li>
                </ol>
                
            </div>
            <div id="wd-lists">
            <h5>Unordered List Tag</h5>
                <p>My favorite books (in no particular order):</p>
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                <p>Your favorite books (in no particular order):</p>
                <ul id="wd-your-books">
                    <li>The Great Gatsby</li>
                    <li>1984</li>
                    <li>To Kill a Mockingbird</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tags</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                        {/* Add rows for quizzes Q4 through Q10 */}
                        <tr>
                            <td>Q4</td>
                            <td>React</td>
                            <td>2/24/21</td>
                            <td>88</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Node.js</td>
                            <td>3/3/21</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Express</td>
                            <td>3/10/21</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>MongoDB</td>
                            <td>3/17/21</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>TypeScript</td>
                            <td>3/24/21</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Git</td>
                            <td>3/31/21</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Vite</td>
                            <td>4/7/21</td>
                            <td>93</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90.4</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image Tag</h4>
                <p>Loading an image from the internet:</p>
                <img
                    id="wd-starship"
                    width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    alt="Starship Image"
                />
                <br />
                <p>Loading a local image:</p>
                <img
                    id="wd-teslabot"
                    src="/images/teslabot.jpg"
                    height="200px"
                    alt="Tesla Bot Image"
                />
            </div>
            {/* Form Elements Section */}
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input placeholder="jdoe" id="wd-text-fields-username" type="text" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input placeholder="*******" id="wd-text-fields-password" type="password" value="1234" /> <br />
                    <label htmlFor="wd-text-fields-first-name">First Name:</label>
                    <input placeholder="John" id="wd-text-fields-first-name" type="text" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last Name:</label>
                    <input value="Wonderland" id="wd-text-fields-last-name" type="text" title="The last name" /> <br />
                    <h5>Textarea</h5>
                    <label htmlFor="wd-textarea">Biography:</label> <br />
                    <textarea id="wd-textarea" cols={30} rows={10}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </textarea>
                </form>

                {/* Dropdown Menus */}
                <h5>Dropdowns</h5>
                <label htmlFor="wd-select-one-genre">Favorite Movie Genre:</label> <br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option value="SCIFI" selected>Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select> <br />

                <label htmlFor="wd-select-many-genre">Favorite Movie Genres:</label> <br />
                <select id="wd-select-many-genre" multiple>
                    <option value="COMEDY" selected>Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option value="SCIFI" selected>Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select> <br />

                {/* Checkboxes */}
                <h5>Checkboxes</h5>
                <label htmlFor="wd-chkbox-comedy">Comedy</label>
                <input type="checkbox" id="wd-chkbox-comedy" /> <br />
                <label htmlFor="wd-chkbox-drama">Drama</label>
                <input type="checkbox" id="wd-chkbox-drama" /> <br />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
                <input type="checkbox" id="wd-chkbox-scifi" /> <br />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
                <input type="checkbox" id="wd-chkbox-fantasy" /> <br />

                {/* Radio Buttons */}
                <h5>Radio Buttons</h5>
                <label htmlFor="wd-radio-comedy">Comedy</label>
                <input type="radio" name="genre" id="wd-radio-comedy" /> <br />
                <label htmlFor="wd-radio-drama">Drama</label>
                <input type="radio" name="genre" id="wd-radio-drama" /> <br />
                <label htmlFor="wd-radio-scifi">Science Fiction</label>
                <input type="radio" name="genre" id="wd-radio-scifi" checked /> <br />
                <label htmlFor="wd-radio-fantasy">Fantasy</label>
                <input type="radio" name="genre" id="wd-radio-fantasy" /> <br />

                {/* Other HTML Field Types */}
                <h4>Other HTML Field Types</h4>
                <label htmlFor="wd-text-fields-email">Email:</label>
                <input type="email" placeholder="jdoe@example.com" id="wd-text-fields-email" /> <br />
                <label htmlFor="wd-text-fields-salary-start">Starting Salary:</label>
                <input type="number" value="100000" id="wd-text-fields-salary-start" /> <br />
                <label htmlFor="wd-text-fields-rating">Rating:</label>
                <input type="range" value="4" max="6" placeholder="Doe" id="wd-text-fields-rating" /> <br />
                <label htmlFor="wd-text-fields-dob">Date of Birth:</label>
                <input type="date" value="2000-01-21" id="wd-text-fields-dob" /> <br />

                {/* Button */}
                <h5>Interactive Buttons</h5>
                <button type="button" id="wd-all-good" onClick={() => alert("Life is Good!")}>
                    Hello World!
                </button>
            </div>
        </div>
    );
}
