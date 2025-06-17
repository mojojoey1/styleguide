import React from 'react';
import { designTokens } from './theme/designTokens';
import { ShadowToken } from './theme/types';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { useColors } from './theme/useColors';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const colors = useColors();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: `${designTokens.spacing.vertical.s} ${designTokens.spacing.horizontal.m}`,
        backgroundColor: colors.neutral.background[1].rest,
        color: colors.neutral.foreground[1].rest,
        border: 'none',
        borderRadius: designTokens.borderRadius.medium,
        cursor: 'pointer',
        ...designTokens.typography.body1.regular,
      }}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

type TabName = 'Colors' | 'Typography' | 'Spacing' | 'Border Radius' | 'Shadows';

const TabButton: React.FC<{
  name: TabName;
  isActive: boolean;
  onClick: () => void;
}> = ({ name, isActive, onClick }) => {
  const colors = useColors();
  
  return (
    <button
      onClick={onClick}
      style={{
        padding: `${designTokens.spacing.vertical.s} ${designTokens.spacing.horizontal.m}`,
        backgroundColor: isActive ? colors.brand.background.rest : colors.neutral.background[1].rest,
        color: isActive ? colors.neutral.foreground.onBrand : colors.neutral.foreground[1].rest,
        border: 'none',
        borderRadius: designTokens.borderRadius.medium,
        cursor: 'pointer',
        ...designTokens.typography.body1.regular,
        transition: 'all 0.2s ease',
        margin: `0 ${designTokens.spacing.horizontal.xs}`,
      }}
    >
      {name}
    </button>
  );
};

const StyleGuideContent: React.FC = () => {
  const colors = useColors();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = React.useState<TabName>('Colors');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Colors':
        return (
          <section style={{ marginBottom: designTokens.spacing.vertical.xxxl }}>
            <h2 style={{ 
              ...designTokens.typography.title2.regular,
              marginBottom: designTokens.spacing.vertical.xl 
            }}>
              Colors
            </h2>
            
            {/* Neutral Colors */}
            <div style={{ marginBottom: designTokens.spacing.vertical.xxl }}>
              <h3 style={{ 
                ...designTokens.typography.subtitle1.regular,
                marginBottom: designTokens.spacing.vertical.l 
              }}>Neutral Colors</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
                <ColorSwatch color={colors.neutral.black} name="Black" />
                <ColorSwatch color={colors.neutral.white} name="White" />
                {Object.entries(colors.neutral.grey).map(([key, value]) => (
                  <ColorSwatch key={key} color={value} name={`Grey ${key}`} />
                ))}
              </div>
            </div>

            {/* Background Colors */}
            <div style={{ marginBottom: designTokens.spacing.vertical.xxl }}>
              <h3 style={{ 
                ...designTokens.typography.subtitle1.regular,
                marginBottom: designTokens.spacing.vertical.l 
              }}>Background Colors</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
                {Object.entries(colors.neutral.background).map(([key, value]) => {
                  if (typeof value === 'object' && 'rest' in value) {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value.rest} 
                        name={`Background ${key}`} 
                        states={value}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Foreground Colors */}
            <div style={{ marginBottom: designTokens.spacing.vertical.xxl }}>
              <h3 style={{ 
                ...designTokens.typography.subtitle1.regular,
                marginBottom: designTokens.spacing.vertical.l 
              }}>Foreground Colors</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
                {Object.entries(colors.neutral.foreground).map(([key, value]) => {
                  if (typeof value === 'object' && 'rest' in value) {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value.rest} 
                        name={`Foreground ${key}`} 
                        states={value}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Stroke Colors */}
            <div style={{ marginBottom: designTokens.spacing.vertical.xxl }}>
              <h3 style={{ 
                ...designTokens.typography.subtitle1.regular,
                marginBottom: designTokens.spacing.vertical.l 
              }}>Stroke Colors</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
                {Object.entries(colors.neutral.stroke).map(([key, value]) => {
                  if (typeof value === 'object' && 'rest' in value) {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value.rest} 
                        name={`Stroke ${key}`} 
                        states={value}
                      />
                    );
                  } else if (typeof value === 'string') {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value} 
                        name={`Stroke ${key}`} 
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Brand Colors */}
            <div style={{ marginBottom: designTokens.spacing.vertical.xxl }}>
              <h3 style={{ 
                ...designTokens.typography.subtitle1.regular,
                marginBottom: designTokens.spacing.vertical.l 
              }}>Brand Colors</h3>

              {/* Brand Background Colors */}
              <h4 style={{ 
                ...designTokens.typography.subtitle2.regular,
                marginBottom: designTokens.spacing.vertical.m 
              }}>Background</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m, marginBottom: designTokens.spacing.vertical.l }}>
                {Object.entries(colors.brand.background).map(([key, value]) => {
                  if (typeof value === 'object' && 'rest' in value) {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value.rest} 
                        name={`Background ${key}`} 
                        states={value}
                      />
                    );
                  } else if (typeof value === 'string') {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value} 
                        name={`Background ${key}`} 
                      />
                    );
                  }
                  return null;
                })}
              </div>

              {/* Brand Foreground Colors */}
              <h4 style={{ 
                ...designTokens.typography.subtitle2.regular,
                marginBottom: designTokens.spacing.vertical.m 
              }}>Foreground</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m, marginBottom: designTokens.spacing.vertical.l }}>
                {Object.entries(colors.brand.foreground).map(([key, value]) => {
                  if (typeof value === 'object' && 'rest' in value) {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value.rest} 
                        name={`Foreground ${key}`} 
                        states={value}
                      />
                    );
                  } else if (typeof value === 'string') {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value} 
                        name={`Foreground ${key}`} 
                      />
                    );
                  }
                  return null;
                })}
              </div>

              {/* Brand Stroke Colors */}
              <h4 style={{ 
                ...designTokens.typography.subtitle2.regular,
                marginBottom: designTokens.spacing.vertical.m 
              }}>Stroke</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
                {Object.entries(colors.brand.stroke).map(([key, value]) => {
                  if (typeof value === 'object' && 'rest' in value) {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value.rest} 
                        name={`Stroke ${key}`} 
                        states={value}
                      />
                    );
                  } else if (typeof value === 'string') {
                    return (
                      <ColorSwatch 
                        key={key} 
                        color={value} 
                        name={`Stroke ${key}`} 
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Data Visualization Colors */}
            <div style={{ marginBottom: designTokens.spacing.vertical.xxl }}>
              <h3 style={{ 
                ...designTokens.typography.subtitle1.regular,
                marginBottom: designTokens.spacing.vertical.l 
              }}>Data Visualization Colors</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
                {Object.entries(colors.dataViz).map(([key, value]) => (
                  <ColorSwatch key={key} color={value} name={key} />
                ))}
              </div>
            </div>
          </section>
        );
      
      case 'Typography':
        return (
          <section style={{ marginBottom: designTokens.spacing.vertical.xxxl }}>
            <h2 style={{ 
              ...designTokens.typography.title2.regular,
              marginBottom: designTokens.spacing.vertical.xl 
            }}>
              Typography
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.vertical.m }}>
              <TypographyExample style={designTokens.typography.display.regular} name="Display" />
              <TypographyExample style={designTokens.typography.largeTitle.regular} name="Large Title" />
              <TypographyExample style={designTokens.typography.title1.regular} name="Title 1" />
              <TypographyExample style={designTokens.typography.title2.regular} name="Title 2" />
              <TypographyExample style={designTokens.typography.title3.regular} name="Title 3" />
              <TypographyExample style={designTokens.typography.subtitle1.regular} name="Subtitle 1" />
              <TypographyExample style={designTokens.typography.subtitle2.regular} name="Subtitle 2" />
              <TypographyExample style={designTokens.typography.body1.regular} name="Body 1" />
              <TypographyExample style={designTokens.typography.body2.regular} name="Body 2" />
              <TypographyExample style={designTokens.typography.caption1.regular} name="Caption 1" />
              <TypographyExample style={designTokens.typography.caption2.regular} name="Caption 2" />
            </div>
          </section>
        );
      
      case 'Spacing':
        return (
          <section style={{ marginBottom: designTokens.spacing.vertical.xxxl }}>
            <h2 style={{ 
              ...designTokens.typography.title2.regular,
              marginBottom: designTokens.spacing.vertical.xl 
            }}>
              Spacing
            </h2>
            <div>
              <h3 style={{ ...designTokens.typography.subtitle1.regular }}>Vertical Spacing</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.vertical.m }}>
                {Object.entries(designTokens.spacing.vertical).map(([key, value]) => (
                  <SpacingExample key={key} size={value} name={`${key} (${value})`} isVertical />
                ))}
              </div>
            </div>
            <div style={{ marginTop: designTokens.spacing.vertical.xl }}>
              <h3 style={{ ...designTokens.typography.subtitle1.regular }}>Horizontal Spacing</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.vertical.m }}>
                {Object.entries(designTokens.spacing.horizontal).map(([key, value]) => (
                  <SpacingExample key={key} size={value} name={`${key} (${value})`} />
                ))}
              </div>
            </div>
          </section>
        );
      
      case 'Border Radius':
        return (
          <section style={{ marginBottom: designTokens.spacing.vertical.xxxl }}>
            <h2 style={{ 
              ...designTokens.typography.title2.regular,
              marginBottom: designTokens.spacing.vertical.xl 
            }}>
              Border Radius
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: designTokens.spacing.horizontal.m }}>
              {Object.entries(designTokens.borderRadius).map(([key, value]) => (
                <BorderRadiusExample key={key} radius={value} name={`${key} (${value})`} />
              ))}
            </div>
          </section>
        );
      
      case 'Shadows':
        return (
          <section style={{ marginBottom: designTokens.spacing.vertical.xxxl }}>
            <h2 style={{ 
              ...designTokens.typography.title2.regular,
              marginBottom: designTokens.spacing.vertical.xl 
            }}>
              Shadows
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: designTokens.spacing.horizontal.xl }}>
              {Object.entries(designTokens.shadows[theme as keyof typeof designTokens.shadows])
                .filter(([key]) => !isNaN(Number(key)))
                .map(([key, value]) => {
                  const shadowValue = value as { primary: ShadowToken; secondary: ShadowToken };
                  if (!shadowValue.primary || !shadowValue.secondary) return null;
                  return (
                    <ShadowExample 
                      key={key} 
                      shadow={{
                        primary: shadowValue.primary,
                        secondary: shadowValue.secondary
                      }} 
                      name={`Shadow ${key}`} 
                    />
                  );
                })}
            </div>
            <div style={{ marginTop: designTokens.spacing.vertical.xl }}>
              <h3 style={{ ...designTokens.typography.subtitle1.regular }}>Brand Shadows</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: designTokens.spacing.horizontal.xl }}>
                {Object.entries(designTokens.shadows[theme as keyof typeof designTokens.shadows].brand).map(([key, value]) => {
                  const shadowValue = value as { primary: ShadowToken; secondary: ShadowToken };
                  if (!shadowValue.primary || !shadowValue.secondary) return null;
                  return (
                    <ShadowExample 
                      key={key} 
                      shadow={{
                        primary: shadowValue.primary,
                        secondary: shadowValue.secondary
                      }} 
                      name={`Brand Shadow ${key}`}
                      isBrand={true}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      
      default:
        return null;
    }
  };

  return (
    <div style={{ 
      fontFamily: designTokens.typography.fontFamily,
      backgroundColor: colors.neutral.background[1].rest,
      color: colors.neutral.foreground[1].rest,
      minHeight: '100vh',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: `${designTokens.spacing.vertical.xl} ${designTokens.spacing.horizontal.xl}`,
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: designTokens.spacing.vertical.xl,
        }}>
          <h1 style={{ 
            ...designTokens.typography.largeTitle.regular,
            margin: 0,
          }}>
            Security Fluent Extension Style Guide
          </h1>
          <ThemeToggle />
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: designTokens.spacing.vertical.xl,
          borderBottom: `1px solid ${colors.neutral.stroke[1].rest}`,
          paddingBottom: designTokens.spacing.vertical.m,
        }}>
          {(['Colors', 'Typography', 'Spacing', 'Border Radius', 'Shadows'] as TabName[]).map((tab) => (
            <TabButton
              key={tab}
              name={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {/* Tab Content */}
        <div style={{
          minHeight: '80vh',
          position: 'relative',
        }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <StyleGuideContent />
    </ThemeProvider>
  );
};

interface ColorSwatchProps {
  color: string;
  name: string;
  states?: {
    rest: string;
    hover?: string;
    pressed?: string;
    selected?: string;
  };
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name, states }) => {
  const colors = useColors();
  
  const getGridColumns = (states: ColorSwatchProps['states']) => {
    if (!states) return '1fr';
    const stateCount = Object.keys(states).length;
    if (stateCount === 1) return '1fr';
    if (stateCount === 2) return 'repeat(2, 1fr)';
    if (stateCount === 3) return 'repeat(3, 1fr)';
    return 'repeat(4, 1fr)';
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.vertical.xs }}>
      {states ? (
        <div style={{
          width: '100%',
          height: '100px',
          display: 'grid',
          gridTemplateColumns: getGridColumns(states),
          gap: '1px',
          backgroundColor: colors.neutral.stroke[1].rest,
          border: `1px solid ${colors.neutral.stroke[1].rest}`,
          borderRadius: designTokens.borderRadius.medium,
          overflow: 'hidden',
        }}>
          <div style={{
            backgroundColor: states.rest,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            padding: designTokens.spacing.vertical.xxs,
          }}>
            <div style={{
              ...designTokens.typography.caption2.regular,
              color: colors.neutral.foreground[1].rest,
              backgroundColor: colors.neutral.background[1].rest,
              padding: `${designTokens.spacing.vertical.xxs} ${designTokens.spacing.horizontal.xs}`,
              borderRadius: designTokens.borderRadius.small,
            }}>Rest</div>
          </div>
          {states.hover && (
            <div style={{
              backgroundColor: states.hover,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              padding: designTokens.spacing.vertical.xxs,
            }}>
              <div style={{
                ...designTokens.typography.caption2.regular,
                color: colors.neutral.foreground[1].rest,
                backgroundColor: colors.neutral.background[1].rest,
                padding: `${designTokens.spacing.vertical.xxs} ${designTokens.spacing.horizontal.xs}`,
                borderRadius: designTokens.borderRadius.small,
              }}>Hover</div>
            </div>
          )}
          {states.pressed && (
            <div style={{
              backgroundColor: states.pressed,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              padding: designTokens.spacing.vertical.xxs,
            }}>
              <div style={{
                ...designTokens.typography.caption2.regular,
                color: colors.neutral.foreground[1].rest,
                backgroundColor: colors.neutral.background[1].rest,
                padding: `${designTokens.spacing.vertical.xxs} ${designTokens.spacing.horizontal.xs}`,
                borderRadius: designTokens.borderRadius.small,
              }}>Pressed</div>
            </div>
          )}
          {states.selected && (
            <div style={{
              backgroundColor: states.selected,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              padding: designTokens.spacing.vertical.xxs,
            }}>
              <div style={{
                ...designTokens.typography.caption2.regular,
                color: colors.neutral.foreground[1].rest,
                backgroundColor: colors.neutral.background[1].rest,
                padding: `${designTokens.spacing.vertical.xxs} ${designTokens.spacing.horizontal.xs}`,
                borderRadius: designTokens.borderRadius.small,
              }}>Selected</div>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100px',
            backgroundColor: color,
            border: `1px solid ${colors.neutral.stroke[1].rest}`,
            borderRadius: designTokens.borderRadius.medium,
            transition: 'background-color 0.3s',
          }}
        />
      )}
      <div style={{ ...designTokens.typography.caption1.regular }}>
        <div>{name}</div>
        <div style={{ color: colors.neutral.foreground[3].rest }}>{color}</div>
      </div>
    </div>
  );
};

interface TypographyExampleProps {
  style: {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
  };
  name: string;
}

const TypographyExample: React.FC<TypographyExampleProps> = ({ style, name }) => {
  const colors = useColors();
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: designTokens.spacing.horizontal.xl }}>
      <div style={{ minWidth: '150px', ...designTokens.typography.caption1.regular }}>
        {name}
        <div style={{ color: colors.neutral.foreground[3].rest }}>
          {style.fontSize} / {style.lineHeight} / {style.fontWeight}
        </div>
      </div>
      <div style={{ ...style, color: colors.neutral.foreground[1].rest }}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
};

interface SpacingExampleProps {
  size: string;
  name: string;
  isVertical?: boolean;
}

const SpacingExample: React.FC<SpacingExampleProps> = ({ size, name, isVertical = false }) => {
  const colors = useColors();
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: designTokens.spacing.horizontal.m }}>
      <div style={{ minWidth: '120px', ...designTokens.typography.caption1.regular }}>{name}</div>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.neutral.background[2].rest,
        padding: designTokens.spacing.horizontal.s,
        borderRadius: designTokens.borderRadius.medium,
        transition: 'background-color 0.3s',
      }}>
        <div style={{ 
          backgroundColor: colors.brand.background.rest,
          width: isVertical ? '100px' : size,
          height: isVertical ? size : '24px',
          borderRadius: designTokens.borderRadius.small,
          transition: 'background-color 0.3s',
        }} />
      </div>
    </div>
  );
};

interface BorderRadiusExampleProps {
  radius: string;
  name: string;
}

const BorderRadiusExample: React.FC<BorderRadiusExampleProps> = ({ radius, name }) => {
  const colors = useColors();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.vertical.xs }}>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: colors.brand.background.rest,
          borderRadius: radius,
          transition: 'background-color 0.3s',
        }}
      />
      <div style={{ ...designTokens.typography.caption1.regular }}>{name}</div>
    </div>
  );
};

interface ShadowExampleProps {
  shadow: {
    primary: ShadowToken;
    secondary: ShadowToken;
  };
  name: string;
  isBrand?: boolean;
}

const ShadowExample: React.FC<ShadowExampleProps> = ({ shadow, name, isBrand }) => {
  const colors = useColors();
  const { theme } = useTheme();
  
  const addAlpha = (color: string, alpha: number): string => {
    const hexColor = color.replace('#', '');
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.vertical.xs }}>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: isBrand ? colors.brand.background.rest : colors.neutral.background[2].rest,
          borderRadius: designTokens.borderRadius.medium,
          boxShadow: `
            ${shadow.primary.x} ${shadow.primary.y} ${shadow.primary.blur} ${addAlpha(shadow.primary.color, shadow.primary.alpha)},
            ${shadow.secondary.x} ${shadow.secondary.y} ${shadow.secondary.blur} ${addAlpha(shadow.secondary.color, shadow.secondary.alpha)}
          `,
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
      />
      <div style={{ ...designTokens.typography.caption1.regular }}>{name}</div>
    </div>
  );
};

export default App; 