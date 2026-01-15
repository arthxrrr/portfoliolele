import PageHeader from '../../components/PageHeader';
import CTA from '../../components/CTA';
import styles from './Services.module.css';

const SERVICES = [
    {
        id: 'residencial',
        title: 'Design Residencial',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg',
        features: [
            'Projeto completo de interiores',
            'Escolha de materiais e acabamentos',
            'Layout funcional e otimizado',
            'Especificação de móveis e decoração',
            'Acompanhamento de obra'
        ],
        icon: '🏠'
    },
    {
        id: 'comercial',
        title: 'Design Comercial',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg',
        features: [
            'Projeto de identidade visual espacial',
            'Otimização de fluxo e circulação',
            'Iluminação comercial estratégica',
            'Mobiliário corporativo',
            'Adequação às normas técnicas'
        ],
        icon: '🏢'
    },
    {
        id: 'projeto3d',
        title: 'Projeto 3D',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg',
        features: [
            'Modelagem 3D completa',
            'Renderização fotorrealista',
            'Tour virtual 360°',
            'Visualização de materiais',
            'Alterações ilimitadas na fase de projeto'
        ],
        icon: '🎨'
    }
];

function Services() {
    return (
        <main className={styles.services}>
            {/* Seção Hero */}
            <PageHeader
                tag="Serviços"
                title="Nossos Serviços"
                description="leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg."
            />

            {/* Lista de Serviços */}
            <section className={styles.servicesList}>
                {SERVICES.map(({ id, title, description, features, icon }, index) => (
                    <article
                        key={id}
                        className={`${styles.serviceItem} ${index % 2 === 1 ? styles.reverse : ''}`}
                    >
                        <div className={styles.serviceImage}>
                            <div className={styles.imagePlaceholder} aria-label={`Imagem de ${title}`}>
                                <span className={styles.imageIcon}>{icon}</span>
                            </div>
                        </div>
                        <div className={styles.serviceContent}>
                            <h2 className={styles.serviceTitle}>{title}</h2>
                            <p className={styles.serviceDescription}>{description}</p>
                            <ul className={styles.featuresList}>
                                {features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <span className={styles.featureIcon}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </section>

            {/* Seção CTA */}
            <CTA
                title="Interessado em algum de nossos serviços?"
                description="Entre em contato para discutirmos seu projeto e criarmos algo incrível juntos."
                buttonText="Solicitar Orçamento"
            />
        </main>
    );
}

export default Services;
