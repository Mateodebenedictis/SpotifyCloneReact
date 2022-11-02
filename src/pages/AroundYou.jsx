import { useSelector } from 'react-redux';

import {Error, Loader, SongCard} from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import { countries } from './countryList';

const AroundYou = ({country}) => {

    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);
    const countryName = countries().find((item) => item.id === country)?.name;

    if( isFetching ) return <Loader  title="Loading songs around you"/>;
    if( error && country ) return <Error title="Error" />;

    return(
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
                Songs around you <span className="font-black">{countryName}</span>
            </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                    data?.map((song, i) => (
                        <SongCard
                            key={song.key}
                            song={song}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default AroundYou;
