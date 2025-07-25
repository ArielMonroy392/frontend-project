export default function Background({ size = 'md' }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src="/dots-lg.svg" alt="Dots" className="dots" />
            <img src="/pokeball-lg.svg" alt="Pokeball" className="pokeball" />
        </div>
    )
}