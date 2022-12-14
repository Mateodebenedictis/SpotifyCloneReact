import SongBar from './SongBar';

const RelatedSongs = ({ data ,isPlaying ,activeSong ,handlePauseClick ,handlePlayClick, artistId }) => {
  
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white mb-3">Related Songs:</h1>
      <div className="empty-6 w-full flex-col">
        {
          data?.map((song, i) => (
            <SongBar
              key={`${song.key}-${artistId}`}
              song={song}
              i={i}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))
        }
      </div>
    </div>
  )
};

export default RelatedSongs;
