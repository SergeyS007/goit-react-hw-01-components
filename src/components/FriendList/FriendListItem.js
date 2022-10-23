import css from 'components/FriendList/FriendList.module.css';

const FriendListItem = props => {
    const { avatar, name, isOnline} = props;
    return (
        <li className={css.item}>
            <span className={isOnline ? css.status : css.isOutline}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;