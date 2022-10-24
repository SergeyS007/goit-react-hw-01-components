import PropTypes from "prop-types";
import css from 'components/Statistics/Statistics.module.css';

const Statistics = props => {
    const { title, stats } = props;
    return (
        <section className={css.statistics}>
            {title !== "" && (<h2 className={css.title}>{title}</h2>)}
            <ul className={css.statlist}>
                {stats.map(item => (
                    <li key={item.id} className={css.item}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li>
                ))
                }
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
}

export default Statistics;
