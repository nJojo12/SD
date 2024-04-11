import styled from "styled-components";

const Wrapper = styled.div`
  scroll-behavior: smooth;
  display: flex;
  flex-flow: column;
  width: 500px;
  height: auto;
  gap: 10px;
  margin: 0 auto;
  padding: 0;
`;

const TeamMemberWrapper = styled.article`
  display: flex;
  min-height: 60px;
  border: 1px solid black;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: black solid 1px;
`;

const PersonalInfoContainer = styled.section`
  display: flex;
  flex-flow: column;
`;

const Name = styled.h2`
  padding: 0;
  margin: 0;
  max-width: 100%;
`;
const Email = styled.h3`
  padding: 0;
  margin: 0;
  max-width: 100%;
`;

export const TeamMember = ({ memberDetails }) => (
  <TeamMemberWrapper>
    <ProfileImage />
    <PersonalInfoContainer>
      <Name>{memberDetails.name}</Name>
      <Email>{memberDetails.email}</Email>
    </PersonalInfoContainer>
  </TeamMemberWrapper>
);

export const TeamMembersContainer = ({ members }) => (
  <Wrapper>
    {members.map((member) => (
      <TeamMember memberDetails={member}></TeamMember>
    ))}
  </Wrapper>
);
