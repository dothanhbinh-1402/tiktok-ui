import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name}></Image>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <BsFillCheckCircleFill className={cx('check')} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
