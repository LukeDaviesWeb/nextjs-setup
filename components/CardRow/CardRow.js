import { Card } from '../Card'

export const CardRow = ({ projects }) => {
    return (
        <div>
            {projects.map(proj => (
                <Card />
            ))}
        </div>
    )
}