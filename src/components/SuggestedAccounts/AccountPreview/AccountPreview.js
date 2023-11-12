import { BsFillCheckCircleFill } from 'react-icons/bs';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2d3321ef0dc24284e5a9df4ec674a5a8.jpeg?x-expires=1699984800&x-signature=tasdq0BswLtfNbZuhATjvI474u0%3D"
                    alt=""
                ></img>
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>thanhbinh</strong>
                    <BsFillCheckCircleFill className={cx('check')} />
                </p>
                <p className={cx('name')}>DoThanhBinh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
