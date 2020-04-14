import { Music } from "./music";
import { Feeling } from "./feeling";
import { BasicPlaylist, Playlist } from "./playlist";
import { User } from "../contexts/user";

export const playlistMock: Playlist = {
  id: 1,
  description: "Lorem ipsum dolor set",
  title: "Nome da Playlist",
  image: {
    src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
    alt: "jack johson",
  },
  musics: [
    {
      id: 1,
      title: "Musica 1",
      description: "Greyhound divisively hello coldly wonderfully marginally far...",
      image: {
        src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
        alt: "jack johson",
      },
    },
    {
      id: 2,
      title: "Musica 2",
      description: "Greyhound divisively hello coldly wonderfully marginally far...",
      image: {
        src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
        alt: "jack johson",
      },
    },
    {
      id: 3,
      title: "Musica 3",
      description: "Greyhound divisively hello coldly wonderfully marginally far...",
      image: {
        src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
        alt: "jack johson",
      },
    },
    {
      id: 4,
      title: "Musica 4",
      description: "Greyhound divisively hello coldly wonderfully marginally far...",
      image: {
        src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
        alt: "jack johson",
      },
    },
  ],
};

export const feelingsMock: Feeling[] = [
  {
    id: 1,
    title: "Sentimento 1",
  },
  {
    id: 2,
    title: "Sentimento 2",
  },
  {
    id: 3,
    title: "Sentimento 3",
  },
  {
    id: 4,
    title: "Sentimento 4",
  },
];

export const searchMusicsMock: Music[] = [
  {
    id: 1,
    title: "Musica 1",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 2,
    title: "Musica 2",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 3,
    title: "Musica 3",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 4,
    title: "Musica 4",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export const playlistsMock: BasicPlaylist[] = [
  {
    id: 1,
    title: "Playlist 1",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 2,
    title: "Playlist 2",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 3,
    title: "Playlist 3",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 4,
    title: "Playlist 4",
    description: "Greyhound divisively hello coldly wonderfully marginally far...",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export const profileMock: User = {
  name: "Lorem ipsum dolor set",
  mail: "mail@domain.com",
  avatarSrc: "https://avatars2.githubusercontent.com/u/8793862?s=400&v=4",
};

export const artistMock = [
  {
    id: 1,
    title: "Lorem ipsum 1",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 2,
    title: "Lorem ipsum 2",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 3,
    title: "Lorem ipsum 3",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
  {
    id: 4,
    title: "Lorem ipsum 4",
    image: {
      src: "https://i.scdn.co/image/71f76e2a7c52cabc26ed9af7acc664724d5e0023",
      alt: "jack johson",
    },
  },
];

export const genderMock = [
  {
    id: 1,
    title: "Genero 1",
  },
  {
    id: 2,
    title: "Genero 2",
  },
  {
    id: 3,
    title: "Genero 3",
  },
  {
    id: 4,
    title: "Genero 4",
  },
];
