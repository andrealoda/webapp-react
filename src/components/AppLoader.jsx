import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css'

export default function AppLoader() {

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <Ring size={50} speed={1.5} bgOpacity={0.25} />
            </div>

        </>
    )
}