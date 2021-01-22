import { Dimensions } from "react-native";

const {height,width}=Dimensions.get('window')

const guidelineBaseWidth = 1080;
const guidelineBaseHeight = 1920;

const scale = size => width / guidelineBaseWidth * size;

export {scale};