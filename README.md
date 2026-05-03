# Fc-sonar — Desafio CI com GitHub Actions e SonarCloud

Aplicação Node.js simples (calculadora) com pipeline de CI integrando GitHub Actions e SonarCloud para análise de qualidade.

## Estrutura

```
.
├── .github/
│   └── workflows/
│       └── ci.yaml           # Pipeline CI
├── src/
│   └── calculator.js         # Aplicação (calculadora)
├── tests/
│   └── calculator.test.js    # Testes Jest
├── jest.config.js            # Config Jest (coverage lcov)
├── package.json
├── sonar-project.properties  # Config SonarCloud
└── README.md
```

## Requisitos

- Node.js 20+
- npm

## Instalação

```bash
npm install
```

## Testes

```bash
npm test
```

Roda Jest com cobertura. O relatório é gerado em `coverage/lcov.info`.

## Pipeline CI

A cada Pull Request para `main`, o workflow `.github/workflows/ci.yaml`:

1. Instala dependências (`npm ci`)
2. Executa testes com cobertura (`npm test`)
3. Submete análise ao SonarCloud (`SonarSource/sonarqube-scan-action`)

## Quality Gate

O SonarCloud reprova o PR se a cobertura de código novo for menor que 80% (regra `Sonar way`).

## Branch Protection

A branch `main` está protegida com:

- Require pull request before merging
- Require status checks to pass before merging:
  - `build-and-analyze` (CI) — Required
  - `SonarCloud Code Analysis` — Required
- Do not allow bypassing the above settings

## Secrets necessários

No GitHub: **Settings → Secrets and variables → Actions**

- `SONAR_TOKEN` — token gerado em https://sonarcloud.io/account/security
