// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
                ;
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2d3321ef0dc24284e5a9df4ec674a5a8.jpeg?x-expires=1699984800&x-signature=tasdq0BswLtfNbZuhATjvI474u0%3D"
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>thanhbinh</strong>
                            <BsFillCheckCircleFill className={cx('check')} />
                        </p>
                        <p className={cx('name')}>DoThanhBinh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};
export default AccountItem;
