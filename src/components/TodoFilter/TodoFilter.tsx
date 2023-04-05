import {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';
import { TodoStatus } from '../../types/TodoStatus';

type Props = {
  query: string,
  setQuery: Dispatch<SetStateAction<string>>,
  setTodoStatus: Dispatch<SetStateAction<TodoStatus>>,
};

export const TodoFilter: FC<Props> = ({
  query,
  setQuery,
  setTodoStatus,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'all':
        setTodoStatus(TodoStatus.ALL);
        break;
      case 'active':
        setTodoStatus(TodoStatus.ACTIVE);
        break;
      case 'completed':
        setTodoStatus(TodoStatus.COMPLETED);
        break;
      default:
        break;
    }
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={handleChange}
          >
            {Object.values(TodoStatus).map((enumValue) => (
              <option
                key={enumValue}
                value={enumValue}
              >
                {enumValue}
              </option>
            ))}
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
