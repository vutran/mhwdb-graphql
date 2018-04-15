import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const MONSTER_QUERY = gql`
  query MonsterQuery($monster: String!) {
    allMonsters(monster: $monster) {
      name {
        en
      }
      description {
        en
      }
      reward {
        bodyCarve {
          ...reward
        }
        questReward {
          ...reward
        }
        hornCarve {
          ...reward
        }
        tailCarve {
          ...reward
        }
        headShellCarve {
          ...reward
        }
        shinyDrop {
          ...reward
        }
      }
    }
  }

  fragment reward on MonsterRewardLevel {
    lr {
      item_en
      stack
      percentage
    }
    hr {
      item_en
      stack
      percentage
    }
  }
`;

export default class App extends React.PureComponent {
  state = {
    value: '',
  };

  search = evt => {
    const { value } = evt.currentTarget;
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <input type="search" onChange={this.search} placeholder="Enter a monster name" />

        <Query query={MONSTER_QUERY} variables={{ monster: this.state.value }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error!</p>;
            }

            return (
              <ol>
                {data.allMonsters.length > 0 &&
                  data.allMonsters.map(monster => (
                    <li key={monster.name.en}>
                      <h2>{monster.name.en}</h2>
                      <div>{monster.description.en}</div>
                      <h3>Rewards</h3>
                      <ol>
                        {Object.keys(monster.reward).map((part, idx) => {
                          const reward = monster.reward[part];
                          return (
                            part &&
                            reward && (
                              <li key={idx}>
                                <h3>{part}</h3>
                                {reward.lr && (
                                  <ol>
                                    {reward.lr.map((r, k) => (
                                      <li key={k}>
                                        LR: {r.item_en} ({r.percentage})
                                      </li>
                                    ))}
                                  </ol>
                                )}
                                {reward.hr && (
                                  <ol>
                                    {reward.hr.map((r, k) => (
                                      <li key={k}>
                                        HR: {r.item_en} ({r.percentage})
                                      </li>
                                    ))}
                                  </ol>
                                )}
                              </li>
                            )
                          );
                        })}
                      </ol>
                    </li>
                  ))}
              </ol>
            );
          }}
        </Query>
      </div>
    );
  }
}
