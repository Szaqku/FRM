import styled from "styled-components";

const Card = styled.div`
  width: 325px;
  border-radius: 5%;
  text-align: center;
  position: relative;
  overflow: hidden;
`

const TopSection = styled.div`
  background-image: url('/images/bg-pattern-card.svg');
  height: 14rem;
`

const Avatar = styled.div.attrs(
    (props: { size: string, insideBorderSize: string }) => ({
        size: props.size,
        insideBorderSize: props.insideBorderSize
    })
)`
  width: ${props => props.size};
  height: ${props => props.size};
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  top: calc(-${props => props.size} / 2);
  left: calc(50% - (${props => props.size} / 2));
  margin: calc( -${props => props.size} / 2) 0;
  
  & > img {
    border-radius: inherit;
    width: calc(${props => `${props.size} - ${props.insideBorderSize}`});
    height: calc(${props => `${props.size} - ${props.insideBorderSize}`});
    display: block;
  }
  
`

const BasicInfoSection = styled.div`
  background-color: white;
  color: ${props => props.theme.colors.primary.darker};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
`

const StatsSection = styled.div`
  color: ${props => props.theme.colors.primary.darker};
  background-color: white;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  display: flex;
  border-top: 1px solid #b7afaf;;
  
  & > div {
    display; flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 1rem
  }
`

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`

const Label = styled.span`
    color: #b7afaf;
    font-size: smaller;
    font-weight: ${props => props.theme.typography.fontWeight.default}
`

const Value = styled.span`
    color: ${props => props.theme.colors.primary.darker};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
`

const ProfileInfo = styled.div`
    padding: 1.5rem 0;
    
    & > div {
        padding-bottom: 15px;
        display: block;
    }
`

const Name = styled.span`
    color: ${props => props.theme.colors.primary.darker};
    font-weight: ${props => props.theme.typography.fontWeight.bold}
`
const Age = styled.span`
    color: #b7afaf;
    padding-left: 0.5rem;
    font-weight: 600
`
const Location = styled.span`
    color: #b7afaf;
    padding-left: 0.5rem;
    font-weight: 500;
    display: block;
    margin-top: 0.25rem;
`

export const ProfileCard = ({stats, info}: Props) => {
    return (
        <Card>
            <TopSection/>
            <BasicInfoSection>
                <Avatar size='8rem' insideBorderSize="0.75rem">
                    <img src={`${process.env.PUBLIC_URL}/images/image-victor.jpg`} alt="victor's avatar"/>
                </Avatar>
                <ProfileInfo>
                    <Name> {info.name} </Name>
                    <Age> {info.age}</Age>
                    <Location>{info.location} </Location>
                </ProfileInfo>
            </BasicInfoSection>
            <StatsSection>
                <Stat>
                    <Value>{stats.followers / 1000}K </Value>
                    <Label> Followers </Label>
                </Stat>
                <Stat>
                    <Value>{stats.likes / 1000}K </Value>
                    <Label> Likes </Label>
                </Stat>
                <Stat>
                    <Value>{stats.photos / 1000}K </Value>
                    <Label> Photos </Label>
                </Stat>
            </StatsSection>
        </Card>
    );
}

export interface Info {
    name: string,
    age: number,
    location: string
}

export interface Stats {
    followers: number,
    likes: number,
    photos: number
}

export interface Props {
    stats: Stats;
    info: Info;
}
