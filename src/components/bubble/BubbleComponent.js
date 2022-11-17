import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import "./myComponent.css";

export default function BubbleComponent(props) {

	const options = {
		size: 220,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols:6,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}

	const children = props.data.map((item, i) => {
		 return <Child 
                    item={item} 
                    className="child" 
                    key={item._id} 
                />
	});

	return (<BubbleUI options={options} className="myBubbleUI">
		{children}
	</BubbleUI>)
};