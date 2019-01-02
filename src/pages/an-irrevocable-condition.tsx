import { graphql as gql } from 'gatsby';
import Img from 'gatsby-image';
import React, { Component } from 'react';
import { Heading, Text } from 'rebass';

import { Box, Flex } from '@rebass/grid';
import idx from 'idx';
import { AudioPageQuery } from '../../typings/__generated__/AudioPageQuery';
import Background from '../components/Background';
import Bar from '../components/Bar';
import Container from '../components/Container';
import Layout from '../components/Layout';
import theme from '../shared/theme';

export interface AudioPageProps extends GatsbyPage {
  data: AudioPageQuery;
}

export const query = gql`
  query AudioPageQuery {
    episodes: allMarkdownRemark(filter: { fields: { collection: { eq: "podcasts" } } }) {
      edges {
        node {
          id

          frontmatter {
            title

            podcast {
              summary
              file
              image {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500) {
                    ...ImageFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getEpisodes = (props: AudioPageQuery) =>
  idx(props, (_) => _.episodes.edges)!.map(({ node }) => node)!;

class AudioPage extends Component<AudioPageProps> {
  private players: HTMLAudioElement[] = [];

  render() {
    const { data } = this.props;
    const episodes = getEpisodes(data);

    return (
      <Layout floating inverse container={false} location={location}>
        <Background background={theme.colors.primary} minHeight="100vh" pt="25vh">
          <Heading
            fontWeight="normal"
            lineHeight={1}
            color="white"
            textAlign="center"
            fontFamily="cursive"
            fontSize={[4, 6, 7]}
          >
            An Irrevocable Condition
          </Heading>
          <Bar width={60} color={theme.colors.white} my={4} ml="auto" mr="auto" />
          <Heading
            as="h3"
            css={{ maxWidth: 450 }}
            fontWeight="normal"
            fontSize={[2, 3]}
            color="white"
            textAlign="center"
            mx="auto"
          >
            Essays and field recordings exploring the idea of home, travel, and happiness.
          </Heading>
          <Container
            bg="white"
            boxShadow="0 -10px 20px -2px rgba(0, 0, 0, 0.2)"
            mt={4}
            css={{ minHeight: '75vh' }}
          >
            <Flex>
              <Box width={[1, 1, 1, 3 / 4]} mt={4}>
                {episodes.map((episode, i) => (
                  <Box key={episode.id} mb={episodes.length - 1 === i ? 0 : 5}>
                    <Flex flexDirection={['column', 'row']}>
                      <Box flex="0 0 200px" mr={4} mb={[3, 0]}>
                        <Img fluid={episode.frontmatter.podcast.image.childImageSharp.fluid} />
                      </Box>
                      <Box>
                        <Heading
                          fontFamily="cursive"
                          fontWeight="normal"
                          lineHeight={1}
                          mb={2}
                          as="h4"
                        >
                          {episode.frontmatter.title}
                        </Heading>
                        <Text fontSize={1} mb={2}>
                          {episode.frontmatter.podcast.summary}
                        </Text>
                        <audio
                          ref={(node) => node && this.players.push(node)}
                          src={episode.frontmatter.podcast.file}
                          controls
                          onPlay={this.handlePlay}
                        />
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </Flex>
          </Container>
        </Background>
      </Layout>
    );
  }

  private handlePlay = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    if (!this.players) {
      return;
    }

    this.players.forEach((player) => {
      if (player !== e.currentTarget) {
        player.pause();
      }
    });
  }
}

export default AudioPage;
