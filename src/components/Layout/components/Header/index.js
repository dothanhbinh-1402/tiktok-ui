import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <div className={cx('search')}>
                    <input
                        placeholder='"Search accounts and videos'
                        spellCheck={false}
                    ></input>
                    <button className={cx('clear')}>
                        <AiOutlineCloseCircle />
                    </button>
                    <BiLoaderCircle className={cx('loading')} />
                    <button className={cx('search-btn')}>
                        <BsSearch />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
