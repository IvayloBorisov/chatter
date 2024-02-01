
interface DashboardProps {
    id: string
}

export const Dashboard: React.FC<DashboardProps> = ({ id }): JSX.Element => {

    return(
        <div>
            { id}
        </div>
    )
}
