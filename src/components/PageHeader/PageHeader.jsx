import PropTypes from 'prop-types';
import styles from './PageHeader.module.css';

/**
 * Cabeçalho padrão para páginas internas
 * Exibe etiqueta, título e descrição centralizados
 */
function PageHeader({ tag, title, description }) {
    return (
        <section className={styles.header}>
            <div className={styles.content}>
                {tag && <span className={styles.tag}>{tag}</span>}
                <h1 className={styles.title}>{title}</h1>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </section>
    );
}

PageHeader.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default PageHeader;
