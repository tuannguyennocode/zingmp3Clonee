import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import ItemSearch from '~/components/Item';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function SearchResults({ searchResults, showToastFunc }) {
    const resultType = {
        songs: false,
        artists: false,
    };
    if (typeof searchResults.songs === 'object') {
        resultType.songs = true;
    }
    if (typeof searchResults.artists === 'object') {
        resultType.artists = true;
    }
    if (resultType.songs || resultType.artists) {
        return (
            <div className={cx('result')}>
                <div className={cx('horizontal-line')}></div>
                <div className={cx('search-title')}>Gợi ý kết quả</div>
                {resultType.artists &&
                    searchResults.artists.map((data, index) => (
                        <ItemSearch key={index} showToastFunc={showToastFunc} data={data} type="singer" />
                    ))}
                {resultType.songs &&
                    searchResults.songs.map((data, index) => (
                        <ItemSearch key={index} showToastFunc={showToastFunc} data={data} type="song" />
                    ))}
            </div>
        );
    }
}

export default SearchResults;
