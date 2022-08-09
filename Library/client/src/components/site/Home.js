import React from 'react'
import LikeIcon from '../likes/LikeIcon';

const Home = ({setHeader}) => {
    return (
        <>
            {/* LEFT SIDE */}
            <div id='about-me'>
                    <ul>
                        <li>
                            <img id="me" src={require('../../static/me.jpg')} alt="xtina pic"/>
                        </li>
                        <li>
                            <h3 className="no-background">
                                Contact
                            </h3>
                        </li>
                        <li>
                            Email: xtina@xtina.codes
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3 className="no-background">
                                About Me:
                            </h3>
                        </li>
                        <li>
                            I am a developer specializing in: HTML, CSS, JavaScript, and Python.
                        </li>
                        <li>
                            I like nature, being festive, and spending time with loved ones (James and Peanut). 
                        </li>
                        <li>
                            <span className='accent'>
                                <a href="https://github.com/xtina-lt" target="_blank" rel="noreferrer noopener">
                                        GitHub
                                </a>
                            </span>
                        </li>
                    </ul>
                    <LikeIcon id={'62edaf62448bd0af02e3ffe7'}/>
                </div>

            {/* RIGHT SIDE */}
            <div className='no-background'>
                <div>
                    <h2>
                        Concepts Languages Libraries
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Front-End</th>
                                <th>Python</th>
                                <th>JavaScript</th>
                                <th>Java</th>
                                <th>Concepts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML5</td>
                                <td>Flask</td>
                                <td>React</td>
                                <td>Spring</td>
                                <td>AJAX</td>
                            </tr>
                            <tr>
                                <td>CSS3</td>
                                <td>Django</td>
                                <td>Express</td>
                                <td>Bcrypt</td>
                                <td>OOP</td>
                            </tr>
                            <tr>
                                <td>API's</td>
                                <td>MySQL</td>
                                <td>MongoDB</td>
                                <td>MySQL</td>
                                <td>REST</td>
                            </tr>
                        </tbody>
                    </table>
                    <LikeIcon id={'62edaee7448bd0af02e3ffe3'}/>
                </div>

                {/* CODING VOCABULARY */}
                <h2>Let's Talk Coding</h2>
                <div>
                    <h3>
                        Full Stack Developer
                    </h3>
                    A full stack developer is someone who can <span className='accent'>develop both client and server applications</span> as well as <span className='accent'>database creation/manipulation</span>. 
                    Full stack is defined as the collection of a series of technologies needed to complete software. 
                    Being able to create a prototype and read code in different languages allows for versitility in any project. 
                    Learning the basics in many languages enhances a larger picture to be taken from complex problems. 
                    This is beneficial for unique solutions with a greater over all control of the product.
                    <LikeIcon id={'62ed90dde6ed3cda6aa98850'}/>
                </div>
                <div>
                    <h3>
                        Request Response Cycle
                    </h3>
                    Client computers and other internet-connected devices <span className='accent'>request access and data</span>. 
                    This can be done by inputing URL, clicking links, submitting forms, or refreshing. 
                    Client devices talk to servers that store web pages or applications. 
                    Then, the application's servers interpret what information is neccessary, sometimes this is done with routing. 
                    Finally, the response is the application's server <span className='accent'>sends the data back</span> to the client.
                    <LikeIcon id={'62ed90fde6ed3cda6aa98856'}/>
                </div>
                <div>
                    <h3>
                        Front-End
                    </h3>
                    Front-end developement focuses on what the <span className='accent'>client sees and interacts</span> with directly, also known as client-side developement. 
                    User interface(UI) access points are where client can interact with designs and determine what each part of the application does.
                    Ensuring dynamic readability between cross-browsers, cross-platforms (operating systems), and cross-devices is pertinent to front-end development.
                    <br/>
                    Examples: <span className='accent'>Hypertext Markup Language(HTML)</span>, <span className='accent'>Cascading Style Sheets(CSS)</span>, and <span className='accent'>JavaScript(JS)</span> frameworks.
                    <LikeIcon id={'62ed9106e6ed3cda6aa9885c'}/>
                </div>
                <div>
                    <h3>
                        Back-End
                    </h3>
                    Back end development creates the server side application processing algorithms. 
                    This deals more with the <span className='accent'>response</span> portion of the Request-Response Cycle. 
                    This is also where connection to <span className='accent'>database(s)</span> is/are initiated. 
                    <span className='accent'>Routes</span> are made to tell servers what information needs to be processed. 
                    The <span className='accent'>execution phase</span> verifies requests, and completes complex algorithms to manipulates data. Finally this data is sent back as a <b>response</b>. 
                    Back-end development acts as a middle man for communication between the client and database.
                    <br/>
                    Examples: <span className='accent'>Python, Java, Ruby, and C#.</span>
                    <LikeIcon id={'62ed9115e6ed3cda6aa98862'}/>
                </div>
                <div>
                    <h3>
                        Database
                    </h3>
                    Databese developement deals with <span className='accent'>Structured Query Language(SQL) or NoSQL</span>. 
                    SQL is a standardized programming lanuage that is used to manage <span className='accent'>relational databases</span> and perform various operations within them.
                    In this development we create, manipulate, and save data into databases. 
                    Databases are a collection of organized information that can be easily accessesd, managed, and updated. 
                    Understanding of Entity Relationship Diagrams(ERD's) is fundamental to organize data and minimize repitition while creating visual planes of how the database looks and behaves. 
                    Differentiating <span className='accent'>Many-to-Many, Many-to-One, and One-to-Many relationships</span>, and seperating for normalization is fundamental. 
                    The basics are being able to destinguish the differnt datatypes, naming conventions, and <span className='accent'>CRUD(Create, Read, Update, Delete)</span> quieries.
                    Examples: <span className='accent'>MySQL and MangoDB.</span>
                    <LikeIcon id={'62ed9121e6ed3cda6aa98868'}/>
                </div>
                <div>
                    <h3>
                        Object-Oriented Programming(OOP)
                    </h3>
                    Object-Oriented Programming is a process that involves analyzing and designing our application from an object oriented point of view. 
                    Everything in the world is an object. 
                    Objects have properties and behaviors which can be translated into a language that the computer can understand. 
                    We use <span className='accent'>objects</span> and <span className='accent'>classes</span> to represent real world objects. 
                    Variables and <span className='accent'>attributes</span> are created for things hat real world objects have. 
                    <span className='accent'>Methods</span> are created to represent real world objects' behaviors. 
                    Complex planning and implimentation is neccessary to execute this type of programming.
                    <LikeIcon id={'62ed9135e6ed3cda6aa9886e'}/>
                </div>
                <div>
                    <h3>
                        Procedural Programming
                    </h3>
                    Procedural execution is completed by both the developer and the computer. 
                    The computer reads from <span className='accent'>top to bottom</span>. 
                    This is how we write out our code. 
                    This is sequential.
                    Promises and Async/Await can be used to offset the timeline or location in code.
                    <LikeIcon id={'62ed9145e6ed3cda6aa98874'}/>
                </div>
                <div>
                    <h3>
                        Hooks
                    </h3>
                    <span className='accent'>React</span> has opened the door for Hooks in programming.
                    They make use of <span className='accent'>state which is updated in real time(is also a hook)</span>.
                    Using hooks instead of classes is great for refactoring. 
                    <span className='accent'>Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. -Reactjs.org</span>
                    <LikeIcon id={'62ed9151e6ed3cda6aa9887a'}/>
                </div>
            </div>
        </>
    )
}

export default Home