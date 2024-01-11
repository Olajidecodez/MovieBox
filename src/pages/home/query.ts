export const fetchMovies = async () => {
  const res = await fetch(
     "https://api.themoviedb.org/3/movie/popular?language=en=US&page=1",
     {
       headers: {
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTRlOGZiYTU1MzRjYzczNzdmZmM0NzRmNWZiNWZiNCIsInN1YiI6IjY1MDViYmU3Mzk0YTg3MDEzOTE1MzY5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNQiw94w2GTDJpx5coaYDH0QcyAnQRqK32miq0pOvVY"
       },
     }
  );
 console.log(res.json());
 return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
     "https://api.themoviedb.org/3/tv/popular?language=en=US&page=1",
     {
       headers: {
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTRlOGZiYTU1MzRjYzczNzdmZmM0NzRmNWZiNWZiNCIsInN1YiI6IjY1MDViYmU3Mzk0YTg3MDEzOTE1MzY5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNQiw94w2GTDJpx5coaYDH0QcyAnQRqK32miq0pOvVY"
       },
     }
  );
 console.log(res.json());
 return res.json();
};