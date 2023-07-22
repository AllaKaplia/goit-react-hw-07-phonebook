import React from "react";
import { LabelFilter, InputFilter } from "./FilterContacts.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/selectors";
import { changedFilter } from "redux/filterSlice";

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <LabelFilter>
      Filter
      <InputFilter
        type="text"
        value={filter}
        name="filter"
        onChange={evt => dispatch(changedFilter(evt.target.value.trim()))} 
      />
    </LabelFilter>
  );
};

export default FilterContacts;