import { BsCoin } from 'react-icons/bs';
import { AiOutlineMore, AiOutlineQuestionCircle, AiOutlineSetting } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { FaLanguage, FaRegKeyboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

/**/
import config from '~/config';
import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '~/layouts/components/Seacrch/Seacrch';

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
    const currentUser = true;

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
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>

                {/* Search*/}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        // <div className={cx('current-user')}></div>
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f5339442d21587197502e66de80c101a.jpeg?x-expires=1699225200&x-signature=bx8%2BmO7%2FZJk1iIiUKF8DkhmbLgc%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            ></Image>
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
