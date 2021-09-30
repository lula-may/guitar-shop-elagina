import React, { useCallback, useEffect, useMemo } from 'react';
import './style.scss';

import PriceRange from '../price-range/price-range';
import { GuitarType, GuitarOption, STRING_COUNTS } from '../../const';
import { useSelector } from 'react-redux';
import { getStringsFilters, getTypeFilters } from '../../store/catalog/selectors';
import { useDispatch } from 'react-redux';
import { addStringsFilter, addTypeFilter, deleteStringsFilter, deleteTypeFilter, resetCatalogPage, updateStringsFilter } from '../../store/actions';

const types = [
  {type: GuitarType.ACOUSTIC, text: 'Акустические гитары'},
  {type: GuitarType.ELECTRO, text: 'Электрогитары'},
  {type: GuitarType.UKULELE, text: 'Укулеле'},
];

const mergeStringsCounts = (guitarTypes) => guitarTypes
  .reduce((acc, type) => [...acc, ...GuitarOption[type]['strings']], []);

export default function Filter() {
  const checkedGuitarTypes = useSelector(getTypeFilters);
  const checkedStringsCounts = useSelector(getStringsFilters);
  const dispatch = useDispatch();

  const availableStringCounts = useMemo(() => checkedGuitarTypes.length ? mergeStringsCounts(checkedGuitarTypes) : STRING_COUNTS, [checkedGuitarTypes]);

  useEffect(() => {
    const stringsCounts = checkedStringsCounts.filter((count) => availableStringCounts.includes(count));
    if (stringsCounts.length !== checkedStringsCounts.length) {
      dispatch(updateStringsFilter(stringsCounts));
    }
  }, [availableStringCounts, checkedStringsCounts, dispatch]);

  const handleGuitarTypeChange = useCallback((evt) => {
    const checkbox = evt.target;
    if (checkbox.checked) {
      dispatch(addTypeFilter(checkbox.id));
    } else {
      dispatch(deleteTypeFilter(checkbox.id));
    }
    dispatch(resetCatalogPage());
  }, [dispatch]);

  const handleStringsCountChange = useCallback((evt) => {
    const checkbox = evt.target;
    const value = Number(checkbox.id);
    if (checkbox.checked) {
      dispatch(addStringsFilter(value));
    } else {
      dispatch(deleteStringsFilter(value));
    }
    dispatch(resetCatalogPage());
  }, [dispatch]);

  return (
    <section className="main__filter filter">
      <form
        action="#"
        method="get"
        id="form-filter"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <h2>Фильтр</h2>
        <div className="filter__item">
          <h3>Цена, ₽</h3>
          <PriceRange/>
        </div>
        <div className="filter__item">
          <h3>Тип гитар</h3>
          <ul className="checkbox-list">
            {types.map(({type, text}) => {
              const isChecked = checkedGuitarTypes.includes(type);
              return (
                <li key={type} className="checkbox-list__item">
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name={`guitar-${type}`}
                    id={type}
                    onChange={handleGuitarTypeChange}
                    checked={isChecked}
                  />
                  <label htmlFor={type}>{text}</label>
                </li>);
            })}
          </ul>
        </div>
        <div className="filter__item">
          <h3>Количество струн</h3>
          <ul className="checkbox-list">
            {STRING_COUNTS.map((count) => {
              const isChecked = checkedStringsCounts.includes(count);
              const isDisabled = !availableStringCounts.includes(count);
              return (
                <li key={count} className="checkbox-list__item">
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name={`strings-${count}`}
                    id={count}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={handleStringsCountChange}
                  />
                  <label htmlFor={count}>{count}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="filter__button button button--plain" type="submit">Показать</button>
      </form>
    </section>
  );
}
