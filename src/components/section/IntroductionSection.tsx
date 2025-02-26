import { Flex } from "@radix-ui/themes";
import BounceCards from "../ui/BounceCards";

const IntroductionSection: React.FC = () => {
  const images = ["https://picsum.photos/400/400?grayscale", "https://picsum.photos/500/500?grayscale", "https://picsum.photos/600/600?grayscale", "https://picsum.photos/700/700?grayscale", "https://picsum.photos/300/300?grayscale"];
  const transformStyles = ["rotate(5deg) translate(-150px)", "rotate(0deg) translate(-70px)", "rotate(-5deg)", "rotate(5deg) translate(70px)", "rotate(-5deg) translate(150px)"];

  return (
    <Flex className="w-full h-screen snap-start py-40" direction="column" align="center" justify="between">
      <h1 className="text-5xl font-bold">Anjay</h1>
      <BounceCards className="custom-bounceCards" images={images} containerWidth={500} containerHeight={250} animationDelay={1} animationStagger={0.08} easeType="elastic.out(1, 0.5)" transformStyles={transformStyles} enableHover={true} />
    </Flex>
  );
};

export default IntroductionSection;
