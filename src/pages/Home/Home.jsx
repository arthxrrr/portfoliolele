import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import CTA from '../../components/CTA';
import styles from './Home.module.css';

const SERVICES_PREVIEW = [
    {
        id: 'residencial',
        title: 'Residencial',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg.',
        icon: '🏠'
    },
    {
        id: 'comercial',
        title: 'Comercial',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg.',
        icon: '🏢'
    },
    {
        id: 'projeto3d',
        title: 'Projeto 3D',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg.',
        icon: '🎨'
    }
];

function Home() {
    return (
        <main className={styles.home}>
            {/* Seção Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Design de Interiores</span>
                    <h1 className={styles.heroTitle}>
                        Escritório de Design de Interiores em
                        <span className={styles.highlight}> Joinville/SC</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        wgiwipg
                    </p>
                    <div className={styles.heroActions}>
                        <Link to="/contato">
                            <Button variant="primary" size="lg">
                                Fale Conosco
                            </Button>
                        </Link>
                        <Link to="/projetos">
                            <Button variant="outline" size="lg">
                                Ver Projetos
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className={styles.imagePlaceholder} aria-label="Imagem de projeto de interiores" />
                </div>
            </section>

            {/* Prévia de Serviços */}
            <section className={styles.services}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>Nossos Serviços</span>
                    <h2 className={styles.sectionTitle}>O que oferecemos</h2>
                </div>
                <div className={styles.servicesGrid}>
                    {SERVICES_PREVIEW.map(({ id, title, description, icon }) => (
                        <article key={id} className={styles.serviceCard}>
                            <span className={styles.serviceIcon}>{icon}</span>
                            <h3 className={styles.serviceTitle}>{title}</h3>
                            <p className={styles.serviceDescription}>{description}</p>
                        </article>
                    ))}
                </div>
                <div className={styles.servicesAction}>
                    <Link to="/servicos">
                        <Button variant="secondary">
                            Conhecer todos os serviços
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Seção CTA */}
            <CTA />
        </main>
    );
}

export default Home;
