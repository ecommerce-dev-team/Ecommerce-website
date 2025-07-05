import person from "../../assets/about-people.jpg.png"
const About = () => {
    return (
        <div >
            <div className="about-header text-white ">
                <div className="about-text">
                    <h1>About for Bacola</h1>
                    <p>WE CAN DO MORE FOR YOU</p>
                </div>
            </div>
            <div className="about">
                <div>
                    <p>
                        In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim.
                        Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim.
                        Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
                    </p>

                    <h1 className="font-bold my-6">Quisque erat urna, congue et libero in eleifend euismod velit.</h1>

                    <p>
                        In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis.
                        Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex.
                        Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl.
                        Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
                    </p>
                </div>
                <div className=" relative md:flex mt-5 ">
                    <div className="person flex ">
                        <div className="md:shrink-0">
                            <img src={person} width={500} height={823} />
                        </div>
                        <div className="p-5 py-5 mt-4">
                            <p>Rachel Leonard - Bacola CEO</p>
                            <h1 className="font-bold mt-2"  >Duis convallis luctus pretium. Pellentesque habitant morbi</h1>
                            <p className="my-5 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <p className="info pb-5">
                                In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor at neque.
                                Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum dictum felis. In semper laoreet dui vitae pharetra.
                                Etiam sit amet molestie nulla, eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis libero ante.
                                Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
                                Curabitur fermentum dolor eu lacus consectetur varius.
                            </p>
                        </div>
                    </div>
                    <div className="content absolute text-black bg-white bottom-0  right-2   pt-8 pl-8  pb-6   w-5/6 ">
                        <p>
                            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim.
                            Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                            Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
                        </p>
                    </div>
                </div>
                <div className=" mt-5 last ">
                    <p>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
                        rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
                </div>
            </div>
        </div>
    );
};

export default About;