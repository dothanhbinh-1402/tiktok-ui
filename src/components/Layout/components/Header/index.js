import { useEffect, useState } from 'react';
import { BsCoin, BsSearch } from 'react-icons/bs';
import {
    AiOutlineCloseCircle,
    AiOutlineMore,
    AiOutlineQuestionCircle,
    AiOutlineSetting,
} from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiLoaderCircle, BiLogOut } from 'react-icons/bi';
import { FaLanguage, FaRegKeyboard } from 'react-icons/fa';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
/**/
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FaLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <AiOutlineQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    { icon: <FaRegKeyboard />, title: 'Keyboard shortcuts' },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <RiAccountCircleLine />,
            title: 'View profile',
            to: '/@hoa',
        },
        {
            icon: <BsCoin />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <AiOutlineSetting />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <BiLogOut />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        // <div className={cx('current-user')}></div>
                        <>
                            <Tippy content="Upload video">
                                <button className={cx('action-btn')}>
                                    <BsFillCloudArrowUpFill />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f5339442d21587197502e66de80c101a.jpeg?x-expires=1699225200&x-signature=bx8%2BmO7%2FZJk1iIiUKF8DkhmbLgc%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <AiOutlineMore />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
