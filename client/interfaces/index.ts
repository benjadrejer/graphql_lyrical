// GENERIC INTERFACES
export interface ILyric {
  id: string;
  content: string;
  likes: number;
};

export interface ISong {
  title: string;
  id: string;
  lyrics?: ILyric[];
};

// GRAPHQL RESPONSE INTERFACES
export interface ISongResponse {
  song: ISong;
};

export interface ISongsResponse {
  songs: ISong[];
};

export interface IDeleteMutationResponse {
  deleteSong: {
    title: string;
    id: string;
  }
};

export interface IAddSongResponse {
  addSong: {
    title: string;
    id: number;
  }
};
