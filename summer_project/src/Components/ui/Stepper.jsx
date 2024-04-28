import './stepper.css'

const Stepper = () => {
    const steps = ['Recipients','Content','Review']

    return <div className="flex justify-between">
        {
            steps?.map((step,i)=>(
                <div key={i} className="step-item">
                    <div>{i+1}</div>
                    <p className="text-blue-600">{step}</p>
                </div>
            ))
        }
    </div>
};

export default Stepper;