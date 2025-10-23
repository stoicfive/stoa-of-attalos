# Alembic - Database Migrations

**What is Alembic?** Version control for your database schema.

## Purpose

Alembic tracks changes to your database structure over time, just like Git tracks changes to your code.

## Key Files

- **`alembic.ini`** - Configuration (database URL, logging)
- **`env.py`** - Migration environment setup
- **`script.py.mako`** - Template for new migrations
- **`versions/`** - Migration files (auto-generated)

## Common Commands

```bash
# Create a new migration (after changing models)
alembic revision --autogenerate -m "add trades table"

# Apply migrations
alembic upgrade head

# Rollback last migration
alembic downgrade -1

# Show current version
alembic current

# Show migration history
alembic history
```

## Workflow

1. **Change your model** (e.g., add a column to `Trade`)
2. **Generate migration**: `alembic revision --autogenerate -m "description"`
3. **Review migration** in `versions/` folder
4. **Apply migration**: `alembic upgrade head`

## Important Notes

- Always review auto-generated migrations before applying
- Migrations are applied in order (tracked by revision IDs)
- Never edit applied migrations - create new ones instead
- Keep migrations in version control

## Metaphor

Think of Alembic like **Git for your database**:
- Migrations = Commits
- `upgrade` = Moving forward in history
- `downgrade` = Rolling back
- `versions/` = Commit history

## Learn More

- [Alembic Tutorial](https://alembic.sqlalchemy.org/en/latest/tutorial.html)
- [Auto-generate](https://alembic.sqlalchemy.org/en/latest/autogenerate.html)
