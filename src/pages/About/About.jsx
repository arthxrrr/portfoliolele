import PageHeader from '../../components/PageHeader';
import styles from './About.module.css';
import profileImage from '/lelesobre.jpeg';

const REASONS = [
    {
        id: 1,
        title: 'Atendimento Personalizado',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg'
    },
    {
        id: 2,
        title: 'Criatividade e Inovação',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg'
    },
    {
        id: 3,
        title: 'Atenção aos Detalhes',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg'
    },
    {
        id: 4,
        title: 'Compromisso com Prazos',
        description: 'Respeitamos seu tempo. Trabalhamos com cronogramas realistas e mantemos você informado em cada etapa.'
    },
    {
        id: 5,
        title: 'Custo-Benefício',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg'
    },
    {
        id: 6,
        title: 'Acompanhamento Completo',
        description: 'leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg'
    }
];

function About() {
    return (
        <main className={styles.about}>
            {/* Seção Hero */}
            <PageHeader
                tag="Sobre"
                title="Por que escolher Leticia Wurges"
                description="leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg. leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg."
            />

            {/* Seção Perfil */}
            <section className={styles.profile}>
                <div className={styles.profileImage}>
                    <img
                        src={profileImage}
                        alt="Leticia Wurges - Designer de Interiores"
                        className={styles.profileImg}
                    />
                </div>
                <div className={styles.profileContent}>
                    <h2 className={styles.profileTitle}>Leticia Wurges</h2>
                    <span className={styles.profileRole}>Designer de Interiores</span>
                    <p className={styles.profileText}>
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg.
                    </p>
                    <p className={styles.profileText}>
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg
                        leticia ablalblagwijgwji0gi0wgw leticia iu9wgwgwig0wgnwgikwg.
                    </p>
                </div>
            </section>

            {/* Grid de Diferenciais */}
            <section className={styles.reasons}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Diferenciais</h2>
                    <p className={styles.sectionDescription}>
                        O que nos torna únicos no mercado de design de interiores
                    </p>
                </div>
                <div className={styles.reasonsGrid}>
                    {REASONS.map(({ id, title, description }) => (
                        <article key={id} className={styles.reasonCard}>
                            <span className={styles.reasonNumber}>{String(id).padStart(2, '0')}</span>
                            <h3 className={styles.reasonTitle}>{title}</h3>
                            <p className={styles.reasonDescription}>{description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default About;
