import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const LoaderBar = () => {
    return (
        <div>
            <div className='border-green-700 w-3/4 mx-auto  min-h-screen'>
                <div className='py-36'>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <p>
                            <Skeleton count={14} />
                        </p>
                    </SkeletonTheme>
                </div>
            </div>
        </div>
    );
};

export default LoaderBar;