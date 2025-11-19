import { useCallback, useState } from 'react'

const useBlockActive = onMouseEnter => {
	const [isActive, setActive] = useState(false)

	const mouseEnterHandler = useCallback(() => {
		setActive(true)
		if (onMouseEnter) {
			onMouseEnter()
		}
	}, [onMouseEnter])

	return { isActive, mouseEnterHandler }
}

const Block = ({ mouseEnterCallback, children, className = '' }) => {
	const { isActive, mouseEnterHandler } = useBlockActive(mouseEnterCallback)

	return (
		<div
			onMouseEnter={mouseEnterHandler}
			className={`${className} ${isActive ? 'active' : ''}`.trim()}
		>
			{children}
		</div>
	)
}

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
	return (
		<Block mouseEnterCallback={mouseEnterCallback}>
			<img src={imgSrc} alt={imgAlt} />
		</Block>
	)
}

export const Block2 = ({ mouseEnterCallback, content }) => {
	return (
		<Block mouseEnterCallback={mouseEnterCallback}>
			<p>{content}</p>
		</Block>
	)
}

export const Block3 = ({ mouseEnterCallback, userData }) => {
	return (
		<Block mouseEnterCallback={mouseEnterCallback}>
			<address>
				country: {userData.country}, street: {userData.street}
			</address>
		</Block>
	)
}
