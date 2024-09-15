export default function Store() {
    return (
        <main id="songs-one">
            <div class="cursor scale"></div>
            <div class="cursor-two scale"></div>

            <div id="preloader">
                <div class="p">
                    <img src="/images/headphone.png" alt="headphone" />
                </div>
                <div class="p">Use Headphone For Better Experience.</div>
            </div>

            <div id="songs-one-content">
                <div class="navigation">
                    <div class="logo hover ">
                        <a href="index-two.html" class="text">ARLO BROWN</a>
                    </div>
                    <div class="menu-bar hover ">
                        <div class="menu-bar-name text">
                            Menu
                        </div>
                        <div class="menu-bar-lines text">
                            <div class="menu-bar-line"></div>
                            <div class="menu-bar-line"></div>
                        </div>
                    </div>
                </div>

                <div class="heading">
                    <div class="text">
                        SONGS
                    </div>
                </div>

                <div class="center">
                    <div id="songs-container">

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-one.jpg" alt="song" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">Blinding Lights</div>
                                    <div class="artist-name">Arlo Brown Ft. Sza</div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="blindinglights" />

                                        <audio data-audio="blindinglights">
                                            <source src="/music/The-Weeknd-Blinding-Lights-_Lyrics_.ogg" type="audio/ogg" />
                                            <source src="music/The Weeknd - Blinding Lights (Lyrics).mp3" type="audio/mp3" />
                                        </audio>
                                    </div>
                                    <div class="download-song mouse">
                                        <a href="music/The Weeknd - Blinding Lights (Lyrics).mp3" download="Blinding Lights - Arlo Brown">4.1K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-two.jpg" alt="song" />
                            </div>
                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">KillMonger</div>
                                    <div class="artist-name">Arlo Brown Ft. Madhw</div>
                                </div>
                                <div class="music-player">
                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="killmonger" />

                                        <audio data-audio="killmonger">
                                            <source src="/music/killmonger.ogg" type="audio/ogg" />
                                            <source src="music/killmonger.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>
                                    <div class="download-song">
                                        <a href="music/killmonger.mp3" download="KillMonger - Arlo Brown">10.2K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-five.jpg" alt="song" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">Alone</div>
                                    <div class="artist-name">Arlo Brown </div>
                                </div>
                                <div class="music-player">
                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="alone" />

                                        <audio data-audio="alone">
                                            <source src="/music/old-town-road.ogg" type="audio/ogg" />
                                            <source src="/music/old-town-road.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>

                                    <div class="download-song">
                                        <a href="music/old-town-road.mp3" download="Alone - Arlo Brown">3.3K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-four.jpg" alt="song" data-song="blindinglights" class="play" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">What's Poppin</div>
                                    <div class="artist-name">Arlo Brown Ft. Charlie Puth</div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="whatspoppin" />

                                        <audio data-audio="whatspoppin">
                                            <source src="/music/The-Weeknd-Blinding-Lights-_Lyrics_.ogg" type="audio/ogg" />
                                            <source src="music/The Weeknd - Blinding Lights (Lyrics).mp3" type="audio/mp3" />
                                        </audio>
                                    </div>

                                    <div class="download-song">
                                        <a href="music/The Weeknd - Blinding Lights (Lyrics).mp3" download="What's Poppin- Arlo Brown">2K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-three.jpg" alt="song" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">The BOX</div>
                                    <div class="artist-name">Arlo Brown </div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="thebox" />

                                        <audio data-audio="thebox">
                                            <source src="/music/old-town-road.ogg" type="audio/ogg" />
                                            <source src="/music/old-town-road.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>
                                    <div class="download-song">
                                        <a href="music/old-town-road.mp3" download="The BOX - Arlo Brown">3.1K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-six.jpg" alt="song" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">Shatter</div>
                                    <div class="artist-name">Justin Timberlake Ft. Arlo Brown</div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="shatter" />

                                        <audio data-audio="shatter">
                                            <source src="/music/killmonger.ogg" type="audio/ogg" />
                                            <source src="music/killmonger.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>

                                    <div class="download-song">
                                        <a href="music/killmonger.mp3" download="Shatter - Arlo Brown">2.8K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">

                            <div class="song-img">
                                <img src="/images/album-thumbnail-seven.jpg" alt="song" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">Cool Blue</div>
                                    <div class="artist-name">Arlo Brown</div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="coolblue" />

                                        <audio data-audio="coolblue">
                                            <source src="/music/old-town-road.ogg" type="audio/ogg" />
                                            <source src="/music/old-town-road.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>

                                    <div class="download-song">
                                        <a href="music/old-town-road.mp3" download="Cool Blue - Arlo Brown">963<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="song fade-up">

                            <div class="song-img">
                                <img src="/images/album-thumbnail-eight.jpg" alt="song" />
                            </div>

                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">Dark Fire</div>
                                    <div class="artist-name">Arlo Brown Ft. Sza</div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="darkfire" />

                                        <audio data-audio="darkfire">
                                            <source src="/music/The-Weeknd-Blinding-Lights-_Lyrics_.ogg" type="audio/ogg" />
                                            <source src="music/The Weeknd - Blinding Lights (Lyrics).mp3" type="audio/mp3" />
                                        </audio>
                                    </div>


                                    <div class="download-song">
                                        <a href="music/The Weeknd - Blinding Lights (Lyrics).mp3" download="Dark Fire - Arlo Brown">1.8K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="song fade-up">
                            <div class="song-img">
                                <img src="/images/album-thumbnail-nine.jpg" alt="song" />
                            </div>
                            <div class="song-details">
                                <div class="song-details-content">
                                    <div class="song-name">The Other Side</div>
                                    <div class="artist-name">Arlo Brown </div>
                                </div>
                                <div class="music-player">

                                    <div class="play-song mouse">
                                        <img src="/images/play.png" alt="play" data-song="theotherside" />

                                        <audio data-audio="theotherside">
                                            <source src="/music/killmonger.ogg" type="audio/ogg" />
                                            <source src="music/killmonger.mp3" type="audio/mp3" />
                                        </audio>
                                    </div>
                                    <div class="download-song">
                                        <a href="music/killmonger.mp3" download="The Other Side - Arlo Brown">2.2K<img src="/images/download.png" alt="download" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="headphone img text">
                    <img src="/images/headphone.png" title="headphone zone" class="text" alt="headphone" />
                </div>

                <div className="music-indicator">
                    <span
                        style={{ "--i": 1 }}
                        className="music-indicator-span"
                    ></span>
                    <span
                        style={{ "--i": 2 }}
                        className="music-indicator-span"
                    ></span>
                    <span
                        style={{ "--i": 3 }}
                        className="music-indicator-span"
                    ></span>
                    <span
                        style={{ "--i": 4 }}
                        className="music-indicator-span"
                    ></span>
                </div>

                <div class="progress-bar-container fade-in">
                    <div class="progressbar"></div>
                </div>

            </div>

            <div class="navigation-content">
                <div class="navigation-logo hover opacity">
                    <a href="#" class="text">ARLO BROWN</a>
                </div>

                <ul class="navigation-ul">
                    <li><a href="index-one.html" data-text="Home" data-img="images/bg-image-three.jpg">Home</a></li>
                    <li><a href="about-one.html" data-text="About" data-img="images/about-img.jpg">About</a></li>
                    <li><a href="songs-one.html" data-text="Songs" data-img="images/album-thumbnail-nine.jpg">Songs</a></li>
                    <li><a href="blog-one.html" data-text="Blogs" data-img="images/main-bg-three.jpg">Blogs</a></li>
                    <li><a href="contact-one.html" data-text="Contact" data-img="images/album-thumbnail-four.jpg">Contact</a></li>
                </ul>

                <div class="navigation-close hover about-close opacity">
                    <div class="navigation-close-line"></div>
                    <div class="navigation-close-line"></div>
                </div>

                <div class="project-preview"></div>

                <div class="headphone-navigation opacity">
                    <img src="/images/headphone.png" title="headphone zone" class="text" alt="headphone" />
                </div>

                <div class="social-media-links-navigation">
                    <ul>
                        <li><a href="#" class="text hover opacity">YT</a></li>
                        <li><a href="#" class="text hover opacity">FB</a></li>
                        <li><a href="#" class="text hover opacity">IG</a></li>
                    </ul>
                </div>
            </div>

        </main>
    )
}