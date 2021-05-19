import { 
    ScheduleComponent, 
    WorkWeek, 
    Day,
    Week, 
    Month, 
    Inject,
    Agenda } from '@syncfusion/ej2-react-schedule';
import './schedule.css'
const Schedule = () => {
    return (
        <div className='padSchedule'>
             <ScheduleComponent width='100%' height='550px'>
            <Inject services={[WorkWeek,Day, Week, Month,Agenda]}/>
             </ScheduleComponent>
        </div>
    )
}

export default Schedule
