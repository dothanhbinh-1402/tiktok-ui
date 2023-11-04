import { BsFillCheckCircleFill } from 'react-icons/bs';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                alt=""
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f5339442d21587197502e66de80c101a.jpeg?x-expires=1699225200&x-signature=bx8%2BmO7%2FZJk1iIiUKF8DkhmbLgc%3D"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Do thanh binh</span>
                    <BsFillCheckCircleFill className={cx('check')} />
                </p>
                <span className={cx('username')}>dothanhbinh</span>
            </div>
        </div>
    );
}

export default AccountItem;
