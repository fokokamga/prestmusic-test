
export class CompagnyInfos {
    public name: string = "prestmusic";
    public founder: string = "florin Kamga";
    public email: string = "";
    public address: string = "";
    public logos: Logos = new Logos(
        "assets/img/logos/logo.png", 
        "assets/img/logos/logo_white.png", 
        "assets/img/logos/logo_black.png"
    );
    public social: Social = new Social(
        "https://www.facebook.com/PrestMusicOfficiel",
        "https://twitter.com/PrestMusiK",
        "https://www.instagram.com/prestmusic",
        ""
    );
    public background: Background = new Background(
        "assets/video/background.mp4",
        "assets/img/background.jpg"
    );

    constructor() { }
}


export class Logos {
    constructor(
        public colored: string,
        public light: string,
        public black: string) { }
}

export class Background {
    constructor(
        public video: string,
        public image: string) { }
}

export class Social {
    constructor(
        public facebook: string,
        public twitter: string,
        public instagram: string,
        public linkedin: string) { }
}