import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './CTA.module.css';

/**
 * Seção de Chamada para Ação (Call to Action) reutilizável
 * Exibe título, descrição e botão de ação
 */
function CTA({
    title = "Pronta para transformar seu espaço?",
    description = "Entre em contato e vamos conversar sobre o seu projeto dos sonhos.",
    buttonText = "Iniciar Projeto",
    buttonLink = "/contato"
}) {
    return (
        <section className={styles.cta}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <Link to={buttonLink}>
                    <Button variant="primary" size="lg" className={styles.button}>
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </section>
    );
}

CTA.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string
};

export default CTA;
