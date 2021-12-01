import React from "react";
import Link from "next/link";
import { NavLink } from "../Header/HeaderStyles";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleStack,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi, I am Hiwot
        <br />
      </SectionTitle>
      <SectionTitleStack>Full Stack Developer</SectionTitleStack>
      <SectionText>I turn problems into usable solutions.</SectionText>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
