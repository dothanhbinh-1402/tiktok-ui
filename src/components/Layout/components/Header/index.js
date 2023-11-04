import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import Tippy from '@tippyjs/react/headless';
/**/
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
