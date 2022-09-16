export interface IVideos {
    videos: ICardVideo[]
}

export interface IVideo {
    video: ICardVideo;
}

export interface ICardVideo {
    _id: string;
    sampleImage: string;
    title: string;
    description: string;
    chenel: string;
    views: number;
    date: string;
    Visibility: string;
    comments?: IComments[];
}

export interface IComments {
    user: string;
    comment: string;
    like?: number;
    disLike?: number; 
}