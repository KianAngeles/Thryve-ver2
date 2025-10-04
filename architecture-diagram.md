# Thryve Application Architecture Diagram

## MEVN Stack Architecture (MongoDB, Express.js, Vue.js, Node.js)

```mermaid
graph TB
    %% Frontend Layer
    subgraph "Frontend (Vue.js + Vite)"
        direction TB
        Browser[Web Browser]
        VueApp[Vue.js Application]
        Router[Vue Router]
        Pinia[Pinia Store]
        Components[Vue Components]
        Services[API Services]
        
        Browser --> VueApp
        VueApp --> Router
        VueApp --> Pinia
        VueApp --> Components
        Components --> Services
        Pinia --> Services
    end

    %% Backend Layer
    subgraph "Backend (Node.js + Express.js)"
        direction TB
        ExpressApp[Express.js Server]
        Middleware[Middleware Layer]
        Routes[API Routes]
        Controllers[Controllers]
        Models[Mongoose Models]
        Utils[Utilities]
        Validators[Input Validators]
        
        ExpressApp --> Middleware
        Middleware --> Routes
        Routes --> Controllers
        Controllers --> Models
        Controllers --> Validators
        Controllers --> Utils
    end

    %% Database Layer
    subgraph "Database (MongoDB)"
        direction TB
        MongoDB[(MongoDB Database)]
        Collections[Collections]
        Indexes[Indexes & Constraints]
        
        MongoDB --> Collections
        Collections --> Indexes
    end

    %% External Services
    subgraph "External Services"
        EmailService[Email Service<br/>Nodemailer]
        FileStorage[Static File Storage]
    end

    %% Connections
    Services -.->|HTTP/HTTPS<br/>REST API| ExpressApp
    Models -.->|Mongoose ODM| MongoDB
    Utils -.->|SMTP| EmailService
    ExpressApp -.->|Static Files| FileStorage

    %% Styling
    classDef frontend fill:#42b883,stroke:#2c3e50,stroke-width:2px,color:#fff
    classDef backend fill:#68a063,stroke:#2c3e50,stroke-width:2px,color:#fff
    classDef database fill:#13aa52,stroke:#2c3e50,stroke-width:2px,color:#fff
    classDef external fill:#f39c12,stroke:#2c3e50,stroke-width:2px,color:#fff

    class Browser,VueApp,Router,Pinia,Components,Services frontend
    class ExpressApp,Middleware,Routes,Controllers,Models,Utils,Validators backend
    class MongoDB,Collections,Indexes database
    class EmailService,FileStorage external
```

## Detailed Component Breakdown

### Frontend Layer (Vue.js)
```mermaid
graph LR
    subgraph "Vue.js Components"
        App[App.vue]
        Layout[Layout Components]
        Views[Views/Pages]
        Components[Reusable Components]
        Forms[Form Components]
        
        App --> Layout
        App --> Views
        Views --> Components
        Views --> Forms
    end

    subgraph "State Management"
        AuthStore[Auth Store]
        PreferencesStore[Preferences Store]
        
        Views --> AuthStore
        Views --> PreferencesStore
    end

    subgraph "Services"
        AuthService[Auth Service]
        MealService[Meal Service]
        WorkoutService[Workout Service]
        DashboardService[Dashboard Service]
        
        AuthStore --> AuthService
        Views --> MealService
        Views --> WorkoutService
        Views --> DashboardService
    end
```

### Backend Layer (Express.js)
```mermaid
graph TB
    subgraph "Express.js Application"
        Server[server.js]
        App[app.js]
        Config[Configuration]
        
        Server --> App
        Server --> Config
    end

    subgraph "Middleware Stack"
        Helmet[Helmet - Security]
        CORS[CORS - Cross-Origin]
        Auth[Auth Middleware]
        RateLimit[Rate Limiting]
        ErrorHandler[Error Handler]
        
        App --> Helmet
        Helmet --> CORS
        CORS --> RateLimit
        RateLimit --> Auth
        Auth --> ErrorHandler
    end

    subgraph "API Routes"
        AuthRoutes[/api/auth]
        UserRoutes[/api/users]
        WorkoutRoutes[/api/workouts]
        MealRoutes[/api/meals]
        DashboardRoutes[/api/dashboard]
        AchievementRoutes[/api/achievements]
        
        App --> AuthRoutes
        App --> UserRoutes
        App --> WorkoutRoutes
        App --> MealRoutes
        App --> DashboardRoutes
        App --> AchievementRoutes
    end

    subgraph "Controllers"
        AuthController[Auth Controller]
        UserController[User Controller]
        WorkoutController[Workout Controller]
        MealController[Meal Controller]
        DashboardController[Dashboard Controller]
        
        AuthRoutes --> AuthController
        UserRoutes --> UserController
        WorkoutRoutes --> WorkoutController
        MealRoutes --> MealController
        DashboardRoutes --> DashboardController
    end
```

### Database Layer (MongoDB)
```mermaid
graph TB
    subgraph "MongoDB Collections"
        Users[(Users Collection)]
        Meals[(Meals Collection)]
        Workouts[(Workouts Collection)]
        Progress[(Progress Collection)]
        UserAchievements[(User Achievements)]
        MasterAchievements[(Master Achievements)]
        Preferences[(Preferences Collection)]
        WaterLogs[(Water Logs Collection)]
        SleepLogs[(Sleep Logs Collection)]
    end

    subgraph "Relationships"
        Users -.->|userId| Meals
        Users -.->|userId| Workouts
        Users -.->|userId| Progress
        Users -.->|userId| UserAchievements
        Users -.->|userId| Preferences
        Users -.->|userId| WaterLogs
        Users -.->|userId| SleepLogs
        MasterAchievements -.->|type| UserAchievements
    end

    subgraph "Indexes"
        UserEmail[email: unique]
        CompoundIdx[userId + date: compound]
        UserIdx[userId: index]
        
        Users --> UserEmail
        Meals --> CompoundIdx
        Workouts --> CompoundIdx
        Progress --> UserIdx
    end
```

## Data Flow Architecture

```mermaid
sequenceDiagram
    participant U as User Browser
    participant V as Vue.js App
    participant S as Pinia Store
    participant API as Express.js API
    participant M as Mongoose Models
    participant DB as MongoDB

    U->>V: User Interaction
    V->>S: Update State
    S->>API: HTTP Request (JWT Token)
    API->>API: Middleware Validation
    API->>M: Model Operation
    M->>DB: Database Query
    DB-->>M: Query Result
    M-->>API: Processed Data
    API-->>S: JSON Response
    S-->>V: State Update
    V-->>U: UI Update
```

## Security Architecture

```mermaid
graph TB
    subgraph "Security Layers"
        Browser[Browser Security]
        Transport[HTTPS Transport]
        CORS[CORS Policy]
        RateLimit[Rate Limiting]
        Auth[JWT Authentication]
        Validation[Input Validation]
        Sanitization[Data Sanitization]
        Encryption[Password Encryption]
    end

    subgraph "Security Flow"
        Request[Incoming Request]
        Helmet[Helmet Headers]
        TokenCheck[JWT Verification]
        InputCheck[Input Validation]
        AuthCheck[Authorization Check]
        Response[Secure Response]
        
        Request --> Helmet
        Helmet --> TokenCheck
        TokenCheck --> InputCheck
        InputCheck --> AuthCheck
        AuthCheck --> Response
    end
```

## Technology Stack Details

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Vue.js 3 | Component-based UI framework |
| | Vue Router | Client-side routing |
| | Pinia | State management |
| | Vite | Build tool and dev server |
| | Axios | HTTP client |
| | PrimeVue | UI component library |
| **Backend** | Node.js | JavaScript runtime |
| | Express.js | Web application framework |
| | Mongoose | MongoDB object modeling |
| | JWT | Authentication tokens |
| | Bcrypt | Password hashing |
| | Helmet | Security headers |
| | Joi | Input validation |
| **Database** | MongoDB | NoSQL document database |
| | MongoDB Indexes | Query optimization |
| **External** | Nodemailer | Email service |
| | Static Files | Asset serving |

## Key Features by Layer

### Frontend Features
- 🔐 User Authentication & Registration
- 📊 Dashboard Analytics
- 🏋️ Workout Tracking
- 🍽️ Meal Logging
- 💧 Water Intake Monitoring
- 😴 Sleep Tracking
- 🏆 Achievement System
- 👤 Profile Management

### Backend Features
- 🛡️ JWT Authentication
- 📝 Input Validation
- 🔒 Password Security
- 📧 Email Services
- 🚦 Rate Limiting
- 📊 Data Aggregation
- 🏆 Achievement Logic
- 📈 Progress Tracking

### Database Features
- 👥 User Management
- 📊 Health Data Storage
- 🔗 Relational Data Structure
- 📈 Performance Indexes
- 🔄 Data Integrity
- 📅 Time-series Data