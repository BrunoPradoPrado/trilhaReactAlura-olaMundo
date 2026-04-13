import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function() {
    const roboHashUrl = `https://robohash.org/${Date.now()}?set=set4`

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Este projeto foi criado para treinar React utilizando conteúdos de matemática, 
                    explorando conceitos como lógica, resolução de problemas e visualização de ideias 
                    matemáticas de forma interativa. O foco é praticar React na prática enquanto revisito 
                    fundamentos matemáticos e experimento novas abordagens de aprendizado.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={roboHashUrl}
                    alt="Foto do desenvolvedor"
                />
            </div>
            
        </div>
    )
}