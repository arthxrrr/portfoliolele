import PageHeader from '../../components/PageHeader';
import styles from './Projects.module.css';

// Projetos placeholder - prontos para substituição futura
const PROJECTS = [
    { id: 1, title: 'Projeto 1', category: 'Residencial', description: 'Descrição do projeto 1' },
    { id: 2, title: 'Projeto 2', category: 'Residencial', description: 'Descrição do projeto 2' },
    { id: 3, title: 'Projeto 3', category: 'Comercial', description: 'Descrição do projeto 3' },
    { id: 4, title: 'Projeto 4', category: 'Comercial', description: 'Descrição do projeto 4' },
    { id: 5, title: 'Projeto 5', category: 'Residencial', description: 'Descrição do projeto 5' },
    { id: 6, title: 'Projeto 6', category: 'Comercial', description: 'Descrição do projeto 6' }
];

function Projects() {
    return (
        <main className={styles.projects}>
            {/* Seção Hero */}
            <PageHeader
                tag="Portfólio"
                title="Projetos"
                description="Conheça alguns dos nossos trabalhos e inspire-se para transformar seu espaço."
            />

            {/* Grid de Projetos */}
            <section className={styles.projectsSection}>
                <div className={styles.projectsGrid}>
                    {PROJECTS.map(({ id, title, category, description }) => (
                        <article key={id} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <div className={styles.imagePlaceholder} aria-label={`Imagem do projeto ${title}`} />
                                <div className={styles.projectOverlay}>
                                    <span className={styles.projectCategory}>{category}</span>
                                    <h3 className={styles.projectTitle}>{title}</h3>
                                    <p className={styles.projectDescription}>{description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;
