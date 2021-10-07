import { useState, useEffect, useRef } from 'preact/hooks';
import styles from './style.css';

const Progress = () => {
	const [progress, setProgress] = useState(1);
	const progressRef = useRef();
	const TOTAL_STEPS = 4;

	const generateSteps = () => {
		const tempStep = [];
		for (let index = 0; index < TOTAL_STEPS; index++) {
			tempStep.push({
				step: index + 1,
				stepName: `Step-${index + 1}`,
			});
		}
		return tempStep;
	};

	useEffect(() => {
		progressRef.current.style.width = `${
			(progress - 1) * (125 / TOTAL_STEPS)
		}%`;
	}, [progress]);

	return (
		<div class={styles.progressContainer}>
			<div class={styles.stepsWrapper}>
				<div class={styles.stepsContainer}>
					<div class={styles.fallbackProgressBar}></div>
					<div class={styles.mainProgressBar} ref={progressRef}></div>
					{generateSteps().map((step) => {
						return (
							<div
								class={
									styles.step + ' ' + (progress >= step.step && styles.active)
								}
							>
								{step.step}
							</div>
						);
					})}
				</div>
				<button
					class={styles.nextButton}
					onClick={() => {
						setProgress(progress + 1);
					}}
					disabled={progress === TOTAL_STEPS}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Progress;
